import {
  createStore
} from "vuex";

const store = createStore({
  state() {
    return {
      movies: [{
          to: "/",
          title: "Stranded"
        },
        {
          to: "/",
          title: "Space Cadet",
        },
        {
          to: "/",
          title: "Reboot"
        },
        {
          to: "/",
          title: "Delima"
        },
        {
          to: "/",
          title: "The Butch",
        },
        {
          to: "/",
          title: "Broken"
        },
        {
          to: "/",
          title: "Overwatch"
        },
        {
          to: "/",
          title: "Box Boy"
        },
      ],
      activemovie: null,
      isOpen: false,
    };
  },
  getters: {},
  mutations: {
    startup(state) {
      // movies mutations
      for (let i = 0; i < state.movies.length; i++) {
        // images
        state.movies[i].img = new URL(
          `../assets/img/portrait/img${i + 1}.jpg`,
          import.meta.url
        );

        // movies
        state.movies[i].src = new URL(
          `../assets/video/${i+1}.mp4`,
          import.meta.url
        );
      }
    },
    setIsOpen(state, a) {
      state.isOpen = a;
      console.log(a)
    }
  },
});

export default store;