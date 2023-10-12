const { createApp } = Vue;

createApp({
    data() {
        return {
            notes: ["Notes 1", "Notes 2", "Notes 3"],
            text: null,
        };
    },
    methods: {
        add() {
            if (this.text) {
                this.notes.push(this.text);
                this.text = "";
                this.$refs.input.focus();
            }
        },
    },
}).mount("#app");