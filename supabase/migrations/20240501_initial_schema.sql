-- Database Schema for JobDigest AI

-- Users table (linked to Auth)
CREATE TABLE users (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    email TEXT UNIQUE NOT NULL,
    subscription_status TEXT DEFAULT 'trial',  -- 'trial', 'basic', 'premium', 'canceled'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User Preferences table
CREATE TABLE user_preferences (
    user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    skills TEXT[] NOT NULL,  -- e.g., ARRAY['React', 'TypeScript']
    min_pay INTEGER DEFAULT 0,
    niches TEXT[] DEFAULT '{}',  -- e.g., ARRAY['tech', 'design']
    remote_only BOOLEAN DEFAULT TRUE,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Job Cache table
CREATE TABLE job_cache (
    id SERIAL PRIMARY KEY,
    job_title TEXT NOT NULL,
    company TEXT,
    description TEXT NOT NULL,
    pay_range TEXT,
    url TEXT UNIQUE NOT NULL,
    fetched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    score FLOAT  -- Proprietary score from AI logic
);

-- User Job Matches table
CREATE TABLE user_job_matches (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    job_id INTEGER REFERENCES job_cache(id) ON DELETE CASCADE,
    match_date DATE DEFAULT CURRENT_DATE,
    UNIQUE(user_id, job_id, match_date)
);

-- RLS Policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_cache ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_job_matches ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view their own profile" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON users FOR UPDATE USING (auth.uid() = id);

-- User preferences policies
CREATE POLICY "Users can view their own preferences" ON user_preferences FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own preferences" ON user_preferences FOR ALL USING (auth.uid() = user_id);

-- User job matches policies
CREATE POLICY "Users can view their own matches" ON user_job_matches FOR SELECT USING (auth.uid() = user_id);
