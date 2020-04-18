console.log("inicio");

const app = new Vue({
    el: '#app',
    data: {

        tasks: [],
        filter: "all"

    },

    methods: {
        addNewTask: function () {
            this.tasks.push({
                title: '',
                description: '',
                done: false,
                visible: true

            });
            this.saveTasks();

        },
        restoreTasks: function () {
            let datosDb = JSON.parse(localStorage.getItem("toDolist"));
            if (datosDb === null) {
                this.tasks = [];

            } else {
                this.tasks = datosDb;
            }
        },
        saveTasks: function () {
            localStorage.setItem('toDolist', JSON.stringify(this.tasks));
        },
        removeTask: function (index) {
            this.tasks[index].visible = false;


        },
        filterTasks: function (task) {
            switch (this.filter) {
                case "all":
                    return task.visible;

                case "finished":
                    return task.visible && task.done;

                case "pending":
                    return task.visible && !task.done;


                case "hidden":

                    return !task.visible;

                default: 
                    return false;
            }




        }



    },
    created: function () {

        let datosDb = JSON.parse(localStorage.getItem("toDolist"));
        if (datosDb === null) {
            this.tasks = [];

        } else {
            this.tasks = datosDb;
        }
    }
})



