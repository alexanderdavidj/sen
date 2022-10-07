const app = new Vue({
    el: "#app",
    data: {
        notes: [],

        505: [
            "I'm going back to 505",
            "If it's a seven-hour flight or a 45-minute drive",
            "In my imagination, you're waiting lying on your side",
            "With your hands between your thighs",
            "Stop and wait a sec'",
            "Oh, when you look at me like that, my darling, what did you expect?",
            "I'd probably still adore you with your hands around my neck",
            "Or I did last time I checked",
            "Not shy of a spark",
            "A knife twists at the thought that I should fall short of the mark",
            "Frightened by the bite, though it's no harsher than the bark",
            "The middle of adventure is such a perfect place to start",
            "I'm going back to 505",
            "If it's a seven-hour flight or a 45-minute drive",
            "In my imagination, you're waiting lying on your side",
            "With your hands between your thighs",
            "But I crumble completely when you cry",
            "It seems like once again you've had to greet me with goodbye",
            "I'm always just about to go and spoil a surprise",
            "Take my hands off of your eyes too soon",
            "I'm going back to 505",
            "If it's a seven-hour flight or a 45-minute drive",
            "In my imagination, you're waiting lying on your side",
            "With your hands between your thighs and a smile",
        ],
    },

    /* https://stackoverflow.com/questions/54979287 */
    methods: {
        handleNewLine(str) {
            return str.replace(/\\r|\\n/g, "<br />");
        },
    },
});

var data = [];
$.getJSON(window.location.href + "ui/shitexpress-notes.json", function (data) {
    data.sort(() => Math.random() - Math.random());
    window.data = data;

    app.notes = data.slice(0, 50);
});

$(window).on("scroll", function () {
    if (
        document.documentElement.clientHeight + window.scrollY >=
        (document.documentElement.scrollHeight ||
            document.documentElement.clientHeight)
    ) {
        app.notes = [
            ...app.notes,
            ...data.slice(app.notes.length, app.notes.length + 25),
        ];
    }
});
