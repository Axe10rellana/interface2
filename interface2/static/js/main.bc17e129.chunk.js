(this["webpackJsonp03-practica"] = this["webpackJsonp03-practica"] || []).push([
  [0],
  {
    12: function (e, i, s) {
      "use strict";
      s.r(i);
      var c = s(1),
        a = s.n(c),
        t = s(3),
        m = s.n(t),
        d = (s(8), s(0)),
        r = function () {
          return Object(d.jsxs)("header", {
            className: "header",
            children: [
              Object(d.jsx)("small", {
                className: "header__link",
                children: "RIGHT NOW",
              }),
              Object(d.jsx)("h1", {
                className: "header__title",
                children: "Home",
              }),
              Object(d.jsxs)("div", {
                className: "header__content",
                children: [
                  Object(d.jsxs)("div", {
                    className: "header__data",
                    children: [
                      Object(d.jsx)("small", { children: "LATITUDE" }),
                      Object(d.jsx)("p", { children: "37.777913" }),
                    ],
                  }),
                  Object(d.jsxs)("div", {
                    className: "header__data",
                    children: [
                      Object(d.jsx)("small", { children: "LONGITUDE" }),
                      Object(d.jsx)("p", { children: "-122.432433" }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        j = function () {
          return Object(d.jsxs)("aside", {
            className: "sidebar",
            children: [
              Object(d.jsxs)("p", {
                className: "sidebar__title",
                children: [
                  " ",
                  Object(d.jsx)("i", { className: "fas fa-chevron-left" }),
                  " APRILZERO",
                ],
              }),
              Object(d.jsx)("a", {
                className: "sidebar__link",
                href: "#explorer",
                children: "EXPLORER",
              }),
              Object(d.jsxs)("div", {
                className: "sidebar__content",
                children: [
                  Object(d.jsxs)("div", {
                    className: "sidebar__data",
                    children: [
                      Object(d.jsx)("small", { children: "SECONDS TRACKED" }),
                      Object(d.jsx)("p", { children: "9,199,980.56" }),
                    ],
                  }),
                  Object(d.jsxs)("div", {
                    className: "sidebar__data",
                    children: [
                      Object(d.jsx)("small", { children: "MILES TRAVELED" }),
                      Object(d.jsx)("p", { children: "58,531" }),
                    ],
                  }),
                  Object(d.jsxs)("div", {
                    className: "sidebar__data",
                    children: [
                      Object(d.jsx)("small", { children: "LOCATIONS" }),
                      Object(d.jsx)("p", { children: "289" }),
                    ],
                  }),
                  Object(d.jsxs)("div", {
                    className: "sidebar__data",
                    children: [
                      Object(d.jsx)("small", { children: "COUNTRIES" }),
                      Object(d.jsx)("p", { children: "9" }),
                    ],
                  }),
                  Object(d.jsxs)("div", {
                    className: "sidebar__data",
                    children: [
                      Object(d.jsx)("small", { children: "CITIES" }),
                      Object(d.jsx)("p", { children: "58" }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        l = function (e) {
          var i = e.title,
            s = e.city,
            c = e.image1,
            a = e.image2,
            t = e.image3,
            m = e.iconoA,
            r = e.iconoB,
            j = e.icono1,
            l = e.icono2,
            n = e.icono3,
            o = e.service1,
            b = e.service2,
            O = e.service3,
            h = e.times1,
            x = e.times2,
            g = e.times3;
          return Object(d.jsx)("section", {
            children: Object(d.jsxs)("div", {
              className:
                "card text-center bg-light animate__animated animate__fadeInUp",
              children: [
                Object(d.jsxs)("div", {
                  className: "card-body",
                  children: [
                    Object(d.jsx)("h2", {
                      className: "card-title",
                      children: i,
                    }),
                    Object(d.jsx)("small", {
                      className: "card__small",
                      children: s,
                    }),
                  ],
                }),
                Object(d.jsxs)("div", {
                  className: "overflow",
                  children: [
                    Object(d.jsx)("img", {
                      src: c,
                      alt: s,
                      className: "card__img",
                    }),
                    Object(d.jsx)("img", {
                      src: a,
                      alt: s,
                      className: "card__img",
                    }),
                    Object(d.jsx)("img", {
                      src: t,
                      alt: s,
                      className: "card__img",
                    }),
                  ],
                }),
                Object(d.jsxs)("div", {
                  className: "card-body",
                  children: [
                    Object(d.jsxs)("div", {
                      className: "card__data",
                      children: [
                        m
                          ? Object(d.jsx)("p", { children: m })
                          : Object(d.jsx)("i", { className: j }),
                        Object(d.jsx)("h3", { children: o }),
                        Object(d.jsx)("small", { children: h }),
                      ],
                    }),
                    Object(d.jsxs)("div", {
                      className: "card__data",
                      children: [
                        r
                          ? Object(d.jsx)("p", { children: r })
                          : Object(d.jsx)("i", { className: l }),
                        Object(d.jsx)("h3", { children: b }),
                        Object(d.jsx)("small", { children: x }),
                      ],
                    }),
                    Object(d.jsxs)("div", {
                      className: "card__data",
                      children: [
                        Object(d.jsx)("i", { className: n }),
                        Object(d.jsx)("h3", { children: O }),
                        Object(d.jsx)("small", { children: g }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        n = [
          {
            id: 1,
            title: "July 2014",
            city: "SAN FRANCISCO",
            image1:
              s.p + "interface2/interface2/static/media/image1.9b956cc2.jpg",
            image2:
              s.p + "interface2/interface2/static/media/image2.4c6164b5.jpg",
            image3:
              s.p + "interface2/interface2/static/media/image3.6a093360.jpg",
            icono1: "fas fa-coffee",
            icono2: "fas fa-bread-slice",
            icono3: "fas fa-dumbbell",
            service1: "COFFEE SHOP",
            service2: "BAKERY",
            service3: "CLIMBING GYM",
            times1: "5 times",
            times2: "5 times",
            times3: "3 times",
          },
          {
            id: 2,
            title: "June 2014",
            city: "CHINA AND 10 OTHER CITIES",
            image1:
              s.p + "interface2/interface2/static/media/image4.82d7fea9.jpg",
            image2:
              s.p + "interface2/interface2/static/media/image5.5d9c5fab.jpg",
            image3:
              s.p + "interface2/interface2/static/media/image6.428bd322.jpg",
            icono1: "fas fa-plane",
            icono2: "fas fa-coffee",
            icono3: "fas fa-gopuram",
            service1: "AIRPORT",
            service2: "COFFEE SHOP",
            service3: "TEMPLE",
            times1: "12 times",
            times2: "7 times",
            times3: "5 times",
          },
          {
            id: 3,
            title: "May 2014",
            city: "JAPAN",
            image1:
              s.p + "interface2/interface2/static/media/image7.b71e51a3.jpeg",
            image2:
              s.p + "interface2/interface2/static/media/image8.bed91360.jpg",
            image3:
              s.p + "interface2/interface2/static/media/image9.d8eecadd.jpg",
            icono1: "fas fa-hotel",
            icono2: "fas fa-plane",
            icono3: "fas fa-store-alt",
            service1: "RESORT",
            service2: "AIRPORT",
            service3: "MALL",
            times1: "33 times",
            times2: "20 times",
            times3: "8 times",
          },
          {
            id: 4,
            title: "April 2014",
            city: "SAN FRANCISCO PUTEAUX VERSAILLES AND 11 OTHER CITIES",
            image1:
              s.p + "interface2/interface2/static/media/image10.bd2411f7.jpg",
            image2:
              s.p + "interface2/interface2/static/media/image11.6cafcedc.jpg",
            image3:
              s.p + "interface2/interface2/static/media/image12.d605acd2.jpg",
            iconoA: "\ud83c\udf2f",
            icono2: "fas fa-coffee",
            icono3: "fas fa-bread-slice",
            service1: "BURRITOS",
            service2: "COFFEE SHOP",
            service3: "BAKERY",
            times1: "8 times",
            times2: "8 times",
            times3: "8 times",
          },
          {
            id: 5,
            title: "March 2014",
            city: "PARIS TREMBLAY EN FRANCE SAN FRANCISCO AND 1 OTHER CITY",
            image1:
              s.p + "interface2/interface2/static/media/image13.8f3261aa.jpg",
            image2:
              s.p + "interface2/interface2/static/media/image14.1b6947dd.jpg",
            image3:
              s.p + "interface2/interface2/static/media/image15.7f50ae77.jpg",
            icono1: "fas fa-landmark",
            iconoB: "\ud83d\uddfc",
            icono3: "fas fa-plane",
            service1: "LANDMARK",
            service2: "FRENCH",
            service3: "AIRPORT",
            times1: "3 times",
            times2: "3 times",
            times3: "3 times",
          },
        ],
        o = function () {
          return Object(d.jsx)("div", {
            className: "container",
            children: Object(d.jsx)("div", {
              className: "row",
              children: n.map(function (e, i) {
                return Object(d.jsx)(
                  "div",
                  {
                    className: "col-md-6",
                    children: Object(d.jsx)(l, {
                      title: e.title,
                      city: e.city,
                      image1: e.image1,
                      image2: e.image2,
                      image3: e.image3,
                      iconoA: e.iconoA,
                      iconoB: e.iconoB,
                      icono1: e.icono1,
                      icono2: e.icono2,
                      icono3: e.icono3,
                      service1: e.service1,
                      service2: e.service2,
                      service3: e.service3,
                      times1: e.times1,
                      times2: e.times2,
                      times3: e.times3,
                    }),
                  },
                  i
                );
              }),
            }),
          });
        },
        b = function () {
          return Object(d.jsx)("main", {
            className: "main",
            children: Object(d.jsx)(o, {}),
          });
        },
        O = function () {
          return Object(d.jsxs)("footer", {
            className: "footer",
            children: [
              Object(d.jsxs)("p", {
                children: [
                  Object(d.jsx)("i", { className: "fas fa-copyright" }),
                  " 2014 Anand Sharma About this site",
                  " ",
                  Object(d.jsx)("i", { className: "fab fa-twitter" }),
                  " ",
                  Object(d.jsx)("i", { className: "fab fa-instagram" }),
                ],
              }),
              Object(d.jsx)("small", {
                children: "Venue icons from Foursquare Maps from Mapbox",
              }),
            ],
          });
        },
        h = function () {
          return Object(d.jsxs)("div", {
            className: "grid",
            children: [
              Object(d.jsx)(r, {}),
              Object(d.jsx)(j, {}),
              Object(d.jsx)(b, {}),
              Object(d.jsx)(O, {}),
            ],
          });
        };
      s(10), s(11);
      m.a.render(
        Object(d.jsx)(a.a.StrictMode, { children: Object(d.jsx)(h, {}) }),
        document.getElementById("root")
      );
    },
    8: function (e, i, s) {},
  },
  [[12, 1, 2]],
]);
//# sourceMappingURL=main.bc17e129.chunk.js.map
