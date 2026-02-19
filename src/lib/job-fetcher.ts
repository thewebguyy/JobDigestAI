import Parser from 'rss-parser';

const parser = new Parser();

export interface ExternalJob {
    job_title: string;
    company: string;
    description: string;
    pay_range: string;
    url: string;
    source: string;
}

export async function fetchJobsFromExternalSources(): Promise<ExternalJob[]> {
    const jobs: ExternalJob[] = [];

    // 1. Fetch from Remotive
    try {
        const remotiveResponse = await fetch('https://remotive.com/api/remote-jobs?limit=50');
        const remotiveData = await remotiveResponse.json();

        if (remotiveData && remotiveData.jobs) {
            const remotiveJobs = remotiveData.jobs.map((j: any) => ({
                job_title: j.title,
                company: j.company_name,
                description: j.description,
                pay_range: j.salary || '',
                url: j.url,
                source: 'Remotive'
            }));
            jobs.push(...remotiveJobs);
        }
    } catch (error) {
        console.error('Error fetching from Remotive:', error);
    }

    // 2. Fetch from Indeed RSS (Example query)
    try {
        const indeedRssUrl = 'https://rss.indeed.com/rss?q=react+developer&l=remote';
        const feed = await parser.parseURL(indeedRssUrl);

        const indeedJobs = feed.items.map((item: any) => ({
            job_title: item.title,
            company: item.creator || 'Indeed',
            description: item.contentSnippet || item.content || '',
            pay_range: '', // RSS doesn't typically show pay
            url: item.link,
            source: 'Indeed RSS'
        }));
        jobs.push(...indeedJobs);
    } catch (error) {
        console.error('Error fetching from Indeed RSS:', error);
    }

    return jobs;
}

export async function ingestJobsIntoCache(supabase: any) {
    const externalJobs = await fetchJobsFromExternalSources();

    if (externalJobs.length === 0) return;

    // Use upsert to deduplicate based on URL (which we set as UNIQUE in SQL)
    const { error } = await supabase
        .from('job_cache')
        .upsert(
            externalJobs.map(job => ({
                job_title: job.job_title,
                company: job.company,
                description: job.description,
                pay_range: job.pay_range,
                url: job.url,
                source: job.source,
                fetched_at: new Date().toISOString()
            })),
            { onConflict: 'url' }
        );

    if (error) {
        console.error('Error ingesting jobs:', error);
    }
}
