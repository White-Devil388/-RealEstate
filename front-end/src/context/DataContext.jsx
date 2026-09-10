import React, { createContext, useContext, useState, useEffect } from 'react';

// API services
import { getBlogs } from '../api/blogApi';
import { getCareers } from '../api/careerApi';
import { getCompanyInfo } from '../api/companyApi';
import { getMedia } from '../api/mediaApi';

const DataContext = createContext();

const EMPTY_COMPANY = {
  stats: [],
  achievements: [],
  achievementImages: [],
  coreValues: [],
  testimonials: [],
  leadershipTeam: [],
  faqItems: []
};

export const DataProvider = ({ children }) => {
  // Blogs
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(false);

  // Careers
  const [careers, setCareers] = useState([]);
  const [careersLoading, setCareersLoading] = useState(false);

  // Company data
  const [companyData, setCompanyData] = useState(EMPTY_COMPANY);
  const [companyLoading, setCompanyLoading] = useState(false);

  // Media
  const [mediaItems, setMediaItems] = useState([]);
  const [mediaLoading, setMediaLoading] = useState(false);

  // Fetch all data from MongoDB Atlas on mount
  useEffect(() => {
    const fetchAll = async () => {
      // Fetch Blogs
      setBlogsLoading(true);
      try {
        const apiBlogs = await getBlogs();
        if (apiBlogs && Array.isArray(apiBlogs)) {
          setBlogs(apiBlogs);
        }
      } catch (err) {
        console.error('Failed to fetch blogs from API:', err);
      } finally {
        setBlogsLoading(false);
      }

      // Fetch Careers
      setCareersLoading(true);
      try {
        const apiCareers = await getCareers();
        if (apiCareers && Array.isArray(apiCareers)) {
          setCareers(apiCareers);
        }
      } catch (err) {
        console.error('Failed to fetch careers from API:', err);
      } finally {
        setCareersLoading(false);
      }

      // Fetch Company Info
      setCompanyLoading(true);
      try {
        const apiCompany = await getCompanyInfo();
        if (apiCompany) {
          setCompanyData({
            stats: apiCompany.stats || [],
            achievements: apiCompany.achievements || [],
            achievementImages: apiCompany.achievementImages || [],
            coreValues: apiCompany.coreValues || [],
            testimonials: apiCompany.testimonials || [],
            leadershipTeam: apiCompany.leadershipTeam || [],
            faqItems: apiCompany.faqItems || []
          });
        }
      } catch (err) {
        console.error('Failed to fetch company info from API:', err);
      } finally {
        setCompanyLoading(false);
      }

      // Fetch Media
      setMediaLoading(true);
      try {
        const apiMedia = await getMedia();
        if (apiMedia && Array.isArray(apiMedia)) {
          setMediaItems(apiMedia);
        }
      } catch (err) {
        console.error('Failed to fetch media from API:', err);
      } finally {
        setMediaLoading(false);
      }
    };

    fetchAll();
  }, []);

  return (
    <DataContext.Provider
      value={{
        // Blogs
        blogs,
        blogsLoading,
        setBlogs,

        // Careers
        careers,
        careersLoading,
        setCareers,

        // Company
        companyData,
        companyLoading,
        setCompanyData,

        // Media
        mediaItems,
        mediaLoading,
        setMediaItems
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
