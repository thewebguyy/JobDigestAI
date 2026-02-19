-- 1. Profiles table to store user data linked to Auth
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscription_status TEXT DEFAULT 'trialing',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. User Preferences for job matching
CREATE TABLE IF NOT EXISTS public.user_preferences (
  id UUID REFERENCES public.profiles(id) ON DELETE CASCADE PRIMARY KEY,
  skills TEXT[] DEFAULT '{}',
  min_pay INT DEFAULT 0,
  niches TEXT[] DEFAULT '{}',
  remote_only BOOLEAN DEFAULT TRUE,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Job Cache to store fetched jobs
CREATE TABLE IF NOT EXISTS public.job_cache (
  id BIGSERIAL PRIMARY KEY,
  job_title TEXT NOT NULL,
  company TEXT NOT NULL,
  description TEXT,
  pay_range TEXT,
  url TEXT UNIQUE NOT NULL,
  source TEXT,
  fetched_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. User Job Matches to record found signals
CREATE TABLE IF NOT EXISTS public.user_job_matches (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  job_id BIGINT REFERENCES public.job_cache(id) ON DELETE CASCADE,
  found_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, job_id)
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_cache ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_job_matches ENABLE ROW LEVEL SECURITY;

-- Basic Policies (Allow users to read/write their own data)
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view their own preferences" ON public.user_preferences FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own preferences" ON public.user_preferences FOR ALL USING (auth.uid() = id);

CREATE POLICY "Everyone can view jobs" ON public.job_cache FOR SELECT USING (true);

CREATE POLICY "Users can view their own matches" ON public.user_job_matches FOR SELECT USING (auth.uid() = user_id);

-- Trigger to create profile and preferences on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (new.id, new.email);
  
  INSERT INTO public.user_preferences (id)
  VALUES (new.id);
  
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
