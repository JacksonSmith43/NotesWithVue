const { createApp } = Vue;

createApp({
    data() {
        return {
            notes: [],
            title: "",
            text: "",
        };
    },
    methods: {
        add() {
            if (this.title || this.text) {
                this.notes.push(createNote(this.title, this.text));
                this.save();
                this.title = "";
                this.text = "";
                this.$refs.input.focus();
            }
        },
        del(id) {
            const position = this.notes.findIndex((note) => note.id === id);
            this.notes.splice(position, 1);
            this.save(); // Keep this if a deleted item should not be there after reloading the page.
        },
        save() {
            localStorage.setItem("notes", JSON.stringify(this.notes));
        },
    },

    created() {
        this.notes = JSON.parse(localStorage.getItem("notes")) || [];
    },

}).mount("#app");

function createNote(title, text) {
    const id = generateId(title, text);
    return {
        id, title, text
    };

}

function generateId(title, text, length = 10) {
    return CryptoJS.SHA256(title + text + new Date())
        .toString()
        .substring(0, length);
}