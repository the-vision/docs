module.exports = {
    title: 'The Vision',
    description: 'Evolution of http://github.com/swapagarwal/JARVIS-on-Messenger',
    ga: 'UA-112400267-2',
    themeConfig: {
        nav: [
            { text: 'Community', link: 'https://discord.gg/MsZ9N9n' },
            { text: 'Contributing 👨‍💻', link: '/contributing' },
        ],
        sidebar: [
            ['/', 'Introduction 👋'],
            ['/history.md', 'History ⏮️'],
            ['/tenets.md', 'Tenets ☯️'],
            {
                title: 'Design 🎨',
                collapsable: false,
                children: [
                    ['/structure.md', 'Package Structure'],
                    ['/stack.md', 'Tech Stack'],
                ]
            },
            {
                title: 'Code ‍🤖',
                collapsable: false,
                children: [
                    ['/tasks.md', 'Major Tasks'],
                    ['/stretch.md', 'Stretch Goals'],
                ]
            },
            ['/progress.md', 'Progress 🏗️'],
            ['/contributing.md', 'Contributing 👨‍💻'],
            ['/donate.md', 'Donate 😇'],
        ],
        lastUpdated: 'Last Updated',
        repo: 'the-vision/docs',
        editLinks: true,
        editLinkText: 'Help us improve this page!'
    },
}
