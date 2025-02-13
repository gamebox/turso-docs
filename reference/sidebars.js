/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'doc',
      label: 'Reference introduction',
      id: 'index',
    },
    'turso-cli',
    'libsql-urls',
    'local-development',
    'extensions',
    'data-consistency',
    {
      type: 'category',
      label: 'Client access',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'client-access/index',
      },
      items: [
        'client-access/javascript-typescript-sdk',
        'client-access/rust-sdk',
        'client-access/python-sdk',
        'client-access/go-sdk',
      ]
    },
    {
      type: 'category',
      label: 'Turso Platform REST API',
      link: {
        type: 'doc',
        id: 'platform-rest-api/index',
      },
      items: [
        {
          type: 'category',
          label: 'Authentication API',
          link: {
            type: 'doc',
            id: 'platform-rest-api/auth/index',
          },
          items: [
            'platform-rest-api/auth/get-tokens-for-user',
            'platform-rest-api/auth/mint-token-for-user',
            'platform-rest-api/auth/revoke-token-for-user',
            'platform-rest-api/auth/validate-token-for-user',
          ]
        },
        {
          type: 'category',
          label: 'Organization API',
          link: {
            type: 'doc',
            id: 'platform-rest-api/organization/index',
          },
          items: [
            'platform-rest-api/organization/get-organizations-for-user',
            'platform-rest-api/organization/get-organization-members',
          ]
        },
        {
          type: 'category',
          label: 'Location API',
          link: {
            type: 'doc',
            id: 'platform-rest-api/location/index',
          },
          items: [
            'platform-rest-api/location/get-locations',
          ]
        },
        {
          type: 'category',
          label: 'Logical database API',
          link: {
            type: 'doc',
            id: 'platform-rest-api/database/index',
          },
          items: [
            'platform-rest-api/database/get-databases-in-org',
            'platform-rest-api/database/get-database-in-org',
            'platform-rest-api/database/create-database-in-org',
            'platform-rest-api/database/update-database-in-org',
            'platform-rest-api/database/destroy-database-in-org',
            'platform-rest-api/database/mint-token-for-database-in-org',
            'platform-rest-api/database/invalidate-all-tokens-for-database-in-org',
            'platform-rest-api/database/get-usage-database-in-org',
          ]
        },
        {
          type: 'category',
          label: 'Database instance API',
          link: {
            type: 'doc',
            id: 'platform-rest-api/instance/index',
          },
          items: [
            'platform-rest-api/instance/get-instances-in-database',
            'platform-rest-api/instance/get-instance-in-database',
            'platform-rest-api/instance/create-instance-in-database',
            'platform-rest-api/instance/destroy-instance-in-database',
          ]
        },
      ]
    },
    'postgres-integration',
  ],
};

module.exports = sidebars;
