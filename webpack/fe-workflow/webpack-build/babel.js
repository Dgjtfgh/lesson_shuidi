module.exports = function() {
    return {
        'presets': [
            [
                '@babel/perset-env',
                {
                    targets: {
                        chrome: 59,
                        edge: 13,
                        firefox: 50,
                        safari: 8
                    }
                }
            ]
        ]
    }
}