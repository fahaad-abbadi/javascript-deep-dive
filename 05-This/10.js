const remote = {
    button: 10,
    OK: true,

    // writing function on the value side
    menu: function() {
        //string interpolation
        console.log(`Press OK to toggle menu`);
        console.log(`${this.OK ? 'Menu is opened' : 'blank'}`)
    }
}

remote.menu();