import {
  createStore
} from "vuex";

const store = createStore({
  state() {
    return {
      slides: [{
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
      // slides mutations
      for (let i = 0; i < state.slides.length; i++) {
        // images
        state.slides[i].img = new URL(
          `../assets/img/slides/img${i + 1}.jpg`,
          import.meta.url
        );
      }
    }
  },
});

export default store;