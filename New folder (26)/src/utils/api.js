// mock data - in real app this would be an actual API call
// using same response shape so swapping later is easy

const CARDS_DATA = [
  {
    id: 1,
    name: 'Mixmax',
    budget_name: 'Software subscription',
    owner_id: 1,
    spent: { value: 100, currency: 'SGD' },
    available_to_spend: { value: 1000, currency: 'SGD' },
    card_type: 'burner',
    expiry: '09 Feb 2025',
    limit: 100,
    status: 'active',
  },
  {
    id: 2,
    name: 'Quickbooks',
    budget_name: 'Software subscription',
    owner_id: 2,
    spent: { value: 50, currency: 'SGD' },
    available_to_spend: { value: 250, currency: 'SGD' },
    card_type: 'subscription',
    expiry: null,
    limit: 10,
    status: 'active',
  },
  {
    id: 3,
    name: 'Slack',
    budget_name: 'Team communication',
    owner_id: 1,
    spent: { value: 200, currency: 'SGD' },
    available_to_spend: { value: 800, currency: 'SGD' },
    card_type: 'subscription',
    expiry: null,
    limit: 50,
    status: 'active',
  },
  {
    id: 4,
    name: 'AWS',
    budget_name: 'Cloud infrastructure',
    owner_id: 3,
    spent: { value: 1500, currency: 'SGD' },
    available_to_spend: { value: 3500, currency: 'SGD' },
    card_type: 'burner',
    expiry: '15 Mar 2025',
    limit: 5000,
    status: 'active',
  },
  {
    id: 5,
    name: 'Notion',
    budget_name: 'Productivity tools',
    owner_id: 1,
    spent: { value: 30, currency: 'SGD' },
    available_to_spend: { value: 170, currency: 'SGD' },
    card_type: 'subscription',
    expiry: null,
    limit: 20,
    status: 'active',
  },
  {
    id: 6,
    name: 'Figma',
    budget_name: 'Design tools',
    owner_id: 2,
    spent: { value: 75, currency: 'SGD' },
    available_to_spend: { value: 425, currency: 'SGD' },
    card_type: 'subscription',
    expiry: null,
    limit: 15,
    status: 'inactive',
  },
  {
    id: 7,
    name: 'GitHub',
    budget_name: 'Dev tools',
    owner_id: 1,
    spent: { value: 400, currency: 'SGD' },
    available_to_spend: { value: 600, currency: 'SGD' },
    card_type: 'burner',
    expiry: '20 Apr 2025',
    limit: 1000,
    status: 'active',
  },
  {
    id: 8,
    name: 'Zoom',
    budget_name: 'Communication',
    owner_id: 3,
    spent: { value: 120, currency: 'SGD' },
    available_to_spend: { value: 880, currency: 'SGD' },
    card_type: 'subscription',
    expiry: null,
    limit: 30,
    status: 'active',
  },
  {
    id: 9,
    name: 'HubSpot',
    budget_name: 'Marketing',
    owner_id: 2,
    spent: { value: 900, currency: 'SGD' },
    available_to_spend: { value: 1100, currency: 'SGD' },
    card_type: 'burner',
    expiry: '01 May 2025',
    limit: 2000,
    status: 'active',
  },
  {
    id: 10,
    name: 'Dropbox',
    budget_name: 'Storage',
    owner_id: 1,
    spent: { value: 45, currency: 'SGD' },
    available_to_spend: { value: 155, currency: 'SGD' },
    card_type: 'subscription',
    expiry: null,
    limit: 25,
    status: 'active',
  },
  {
    id: 11,
    name: 'Jira',
    budget_name: 'Project management',
    owner_id: 3,
    spent: { value: 300, currency: 'SGD' },
    available_to_spend: { value: 700, currency: 'SGD' },
    card_type: 'subscription',
    expiry: null,
    limit: 40,
    status: 'active',
  },
  {
    id: 12,
    name: 'Salesforce',
    budget_name: 'CRM',
    owner_id: 2,
    spent: { value: 2000, currency: 'SGD' },
    available_to_spend: { value: 8000, currency: 'SGD' },
    card_type: 'burner',
    expiry: '10 Jun 2025',
    limit: 10000,
    status: 'active',
  },
  {
    id: 13,
    name: 'Intercom',
    budget_name: 'Customer support',
    owner_id: 1,
    spent: { value: 180, currency: 'SGD' },
    available_to_spend: { value: 320, currency: 'SGD' },
    card_type: 'subscription',
    expiry: null,
    limit: 60,
    status: 'inactive',
  },
  {
    id: 14,
    name: 'Stripe',
    budget_name: 'Payments',
    owner_id: 3,
    spent: { value: 500, currency: 'SGD' },
    available_to_spend: { value: 4500, currency: 'SGD' },
    card_type: 'burner',
    expiry: '25 Jul 2025',
    limit: 5000,
    status: 'active',
  },
  {
    id: 15,
    name: 'Datadog',
    budget_name: 'Monitoring',
    owner_id: 2,
    spent: { value: 650, currency: 'SGD' },
    available_to_spend: { value: 1350, currency: 'SGD' },
    card_type: 'subscription',
    expiry: null,
    limit: 80,
    status: 'active',
  },
  {
    id: 16,
    name: 'Twilio',
    budget_name: 'Communications API',
    owner_id: 1,
    spent: { value: 220, currency: 'SGD' },
    available_to_spend: { value: 280, currency: 'SGD' },
    card_type: 'burner',
    expiry: '30 Aug 2025',
    limit: 500,
    status: 'active',
  },
  {
    id: 17,
    name: 'Asana',
    budget_name: 'Project management',
    owner_id: 3,
    spent: { value: 90, currency: 'SGD' },
    available_to_spend: { value: 410, currency: 'SGD' },
    card_type: 'subscription',
    expiry: null,
    limit: 35,
    status: 'active',
  },
  {
    id: 18,
    name: 'Mailchimp',
    budget_name: 'Email marketing',
    owner_id: 2,
    spent: { value: 140, currency: 'SGD' },
    available_to_spend: { value: 360, currency: 'SGD' },
    card_type: 'burner',
    expiry: '12 Sep 2025',
    limit: 500,
    status: 'active',
  },
  {
    id: 19,
    name: 'Linear',
    budget_name: 'Dev management',
    owner_id: 1,
    spent: { value: 60, currency: 'SGD' },
    available_to_spend: { value: 140, currency: 'SGD' },
    card_type: 'subscription',
    expiry: null,
    limit: 20,
    status: 'active',
  },
  {
    id: 20,
    name: 'Vercel',
    budget_name: 'Hosting',
    owner_id: 3,
    spent: { value: 350, currency: 'SGD' },
    available_to_spend: { value: 650, currency: 'SGD' },
    card_type: 'burner',
    expiry: '05 Oct 2025',
    limit: 1000,
    status: 'active',
  },
]

// current logged in user - hardcoded for now
// TODO: replace with auth context later
export const LOGGED_IN_USER = 1

export function getCards({ pageNum = 1, limit = 10, activeTab = 'all', query = '', type = '' }) {
  return new Promise((resolve, reject) => {
    // simulating network delay
    setTimeout(() => {
      try {
        let results = [...CARDS_DATA]

        if (activeTab === 'your') {
          results = results.filter(c => c.owner_id === LOGGED_IN_USER)
        } else if (activeTab === 'blocked') {
          results = results.filter(c => c.status === 'inactive')
        }

        if (query.trim()) {
          results = results.filter(c =>
            c.name.toLowerCase().includes(query.toLowerCase().trim())
          )
        }

        if (type) {
          results = results.filter(c => c.card_type === type)
        }

        const total = results.length
        const startIndex = (pageNum - 1) * limit
        const data = results.slice(startIndex, startIndex + limit)

        resolve({ data, page: pageNum, per_page: limit, total })
      } catch (err) {
        reject(err)
      }
    }, 450)
  })
}
