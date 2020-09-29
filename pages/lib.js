var utils = {
    datify(value) {
        if (value && value.length) {
            var d = new Date(Date.parse(value));
            var options = { year: "numeric", month: "long", day: "numeric" };
            return d.toLocaleDateString("en-us", options);
        }
    },
}

export default utils