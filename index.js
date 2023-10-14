const { createApp } = Vue;

createApp({
    data() {
        return {
            notes: [
                { id: "6769c9ba771", title: "Title 1", text: "ToDo 1" },
                { id: "dc19d1538f", title: "Title 2", text: "ToDo 2" },
                { id: "fd8c75b4fb", title: "Title 3", text: "ToDo 3" },
            ],
            title: null,
            text: null,
        };
    },
    methods: {
        add() {
            if (this.title) {
                this.notes.push(this.title);
                this.title = "";
                this.$refs.input.focus();
            }
        },
        handleClickLIItem(position) {
            this.notes.splice(position, 1);
        }
    },
}).mount("#app");