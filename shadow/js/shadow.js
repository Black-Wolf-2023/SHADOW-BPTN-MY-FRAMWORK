export default class Shadow {
    constructor() {
        this.set = (data) => {
            if (data) {
                console.log();
                Appender(data);
            } else {
                console.warn("Please Enter Array Of Data");
            }
        };
        let Appender = (items) => {
            document.addEventListener("DOMContentLoaded", () => {
                const data = items;
                for (let item of data) {
                    let elements = document.querySelectorAll(`.${item.name}`);
                    elements.forEach((e) => {
                        e.classList.add(...data[data.indexOf(item)].sty.join().split(' '));
                    });
                }
            });
        };
    }
}
