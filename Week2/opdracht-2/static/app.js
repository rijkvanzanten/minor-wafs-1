/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


(function(){
    var config = {
        //routes:
        home: document.getElementById('home'),
        rijksmuseum: document.getElementById('rijksmuseum'),
        kunstObject: document.getElementById('kunstObject'),
        getUserQuery: document.getElementById('getUserQuery'),
    };

    var app = {
        init: function() {
            routes.init();
        }
    };

    var routes = {
        init: function() {
            routie({
                'home': function() {
                    sections.home(location.hash);

                    config.rijksmuseum.classList.add('hide');
                    config.kunstObject.classList.add('hide');
                    config.home.classList.remove('hide');

                    console.log('You\'re home');
                },
                'rijksmuseum': function() {
                    sections.kunst(location.hash); //>gaat naar var sections prop kunst

                    config.home.classList.add('hide');
                    config.kunstObject.classList.add('hide');
                    config.rijksmuseum.classList.remove('hide');

                    console.log('You\'re searching');
                },
                'rijksmuseum/:kunstObject': function(kunstObject) {
                    sections.kunstObject(location.hash);

                    config.home.classList.add('hide');
                    config.rijksmuseum.classList.add('hide');
                    config.kunstObject.classList.remove('hide');

                    console.log('You\'re viewing details');
                }
            });

            location.hash = '#home';
        }
    };

    var sections = {
        home: function() {
            config.rijksmuseum.classList.add('hide');
            this.toggle(location.hash);
        },
        kunst: function() {
            this.toggle(location.hash);
        },
        kunstObject: function() {
            var mediaItems = document.getElementsByClassName('media-item');
            var route = location.hash;
            var idRoute = route.slice(12);
            this.toggle(location.hash);
            var detailUrl = 'https://www.rijksmuseum.nl/api/nl/collection' + idRoute + '?key=epHseGj4&q=&ps=50&format=json';
            var htmlDetail = '';

            console.log(detailUrl);
            console.log(this.id);

            aja()
                .url(detailUrl)
                .on('success', function(detail){
                    console.log('api is loaded');
                    var object = detail.artObject;

                    var context = {
                        idroute: idRoute,
                        imageSource: object.webImage.url,
                        title: object.title,
                        description: object.description,
                        artist: object.principalOrFirstMaker
                    };

                    var source = document.getElementById('detail-template').innerHTML;
                    var template = Handlebars.compile(source);
                    var htmlDetail = template(context);

                    document.getElementById('detailKunst').innerHTML = htmlDetail;
                  })
                  .go();
        },
        toggle: function(route) { //route is locationhash declared in routes.
            document.querySelectorAll('section').forEach(function(section) {
                var sectionHash = '#' + section.id;

                if (sectionHash === route) {
                    section.classList.remove('hide');
                } else {
                    section.classList.add('hide');
                }
            });
        }
    };

    config.getUserQuery.addEventListener('click', function() {
        var config = {
            //for api results:
            userQuery: document.getElementById('user-input-field').value,
            apiUrl: 'https://www.rijksmuseum.nl/api/nl/collection?key=epHseGj4&q=&ps=50&format=json&imageonly=true&q=',

            // to change html:
            htmlCollection: '',
        };

        aja()
            .url(config.apiUrl + config.userQuery)
            .on('success', function(obj) {
                console.log('api is loaded');

                obj.artObjects.map(function(element) {
                    console.log(element);
                    if (element.webImage !== null) {
                        config.htmlCollection = `
                          <div class="media-item" id="${element.objectNumber}">
                            <h1><a href="#rijksmuseum/${element.objectNumber}">${element.principalOrFirstMaker}</a></h1>
                            <p>${element.title}</p>
                            <img src="${element.webImage.url}" alt="${element.longTitle}" />
                          </div>
                        `;
                    } else {
                        console.log('Er is helaas geen foto beschikbaar voor: ' + element.title);
                    }
                });

                document.getElementById('queryResult').innerHTML = config.htmlCollection;
            })
            .go();
    });

    app.init();
}());
