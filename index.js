createApp({
    data() {
        return {
            notes: ["Notes 1", "Notes 2", "Notes 3"],
            text: null,
        };
    },
    methods: {
        handleClick() {
            if (this.text) {
                this.notes.push(this.text);
            }
        },
    },
}).mount("app");