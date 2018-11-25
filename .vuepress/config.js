module.exports = {
    title: 'The Vision',
    description: 'Evolution of http://github.com/swapagarwal/JARVIS-on-Messenger',
    ga: 'UA-112400267-2',
    themeConfig: {
        sidebar: [
            ['/', 'Introduction'],
            ['/history.md', 'History'],
            ['/tenets.md', 'Tenets'],
            {
                title: 'Design',
                collapsable: false,
                children: [
                    ['/structure.md', 'Package Structure'],
                    ['/stack.md', 'Tech Stack'],
                ]
            },
            ['/tasks.md', 'Tasks'],
            ['/contributing.md', 'Contributing'],
            ['/donate.md', 'Donate'],
        ],
        lastUpdated: 'Last Updated',
        repo: 'the-vision/docs',
        editLinks: true,
        editLinkText: 'Help us improve this page!'
    },
}
