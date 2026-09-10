import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
  {
    key: {
      type: String,
      default: 'main_company_info',
      unique: true
    },
    stats: [
      {
        label: String,
        value: String,
        sub: String
      }
    ],
    achievements: [
      {
        value: String,
        title: String,
        desc: String
      }
    ],
    achievementImages: [String],
    coreValues: [
      {
        title: String,
        desc: String,
        icon: String
      }
    ],
    testimonials: [
      {
        quote: String,
        name: String,
        detail: String
      }
    ],
    leadershipTeam: [
      {
        name: String,
        role: String,
        bio: String,
        image: String
      }
    ],
    faqItems: [
      {
        q: String,
        a: String
      }
    ]
  },
  {
    timestamps: true
  }
);

const Company = mongoose.models.Company || mongoose.model('Company', companySchema);

export default Company;
