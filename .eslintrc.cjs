module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
        '@electron-toolkit/eslint-config-ts/recommended'
    ],
    'plugins': [
        '@emotion'
    ],
    'rules': {
        'react/no-unknown-property': [
            2,
            {
                'ignore': [
                    'css'
                ]
            }
        ]
    }
};
