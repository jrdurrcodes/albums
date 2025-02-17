class albums {

    constructor () {
        this.data = [ 
            {
                artist: 'Jon B.',
                title: 'Cool Relax',
                genre: 'R & B',
                albumRecorded:'1996',
                albumReleased: '1997',
                label: 'Yab Yum',
                isFavorite: false
            },
            {
                artist: 'Monica',
                title: 'After the Rain',
                genre: 'R & B',
                albumRecorded: '2003',
                albumReleased: '2003',
                label: 'J',
                isFavorite: false
            },
            {
                artist: 'Cece Winans',
                title: 'Believe For It',
                genre: 'Christian',
                albumRecorded: '2020',
                albumReleased: '2021',
                label: 'Puresprings Gospel',
                isFavorite: false
            },
            {
                artist: 'Fred Hammond',
                title: 'Sunday Morning Fred',
                genre: 'Inspirational',
                albumRecorded: '2021',
                albumReleased: '2021',
                label: 'Face to Face',
                isFavorite: false
            },
            {
                artist: 'Lathan Warlick',
                title: "Lets Be Honest",
                genre: 'Gospel/Christian',
                albumRecorded: '2022',
                albumReleased: '2022',
                label: 'Columbia Records',
                isFavorite: false
            },
            {
                artist: 'Lecrae',
                title: 'Anomaly',
                genre: 'Christian Rap',
                albumRecorded: '2013-2014',
                albumRelease: '2014',
                label: 'Reach Records',
                isFavorite: false
            }
        ]                    

        this.row = document.getElementById('row')

    }

    init() {
        this.cards(this.data)
    }

    buildCard(obj) {

        const row = this.row

        const column = document.createElement( 'div')
        column.classList.add('col')

        const card = document.createElement('div')
        card.classList.add('card', 'h-100')
        card.setAttribute('id', `card-${obj.albums}`)
    
        card.innerHTML = `
            <header class="card-header">
                ${obj.title} <div class ="card-heading  text-capitalize><h/2>
            </header>
        <section class= "card-body">  
            <p class ="card-text">
                <span>${obj.albumRecorded.toDateString()}</span> -${obj.albumReleased.toDateString()}</
                span>
            </p>
            <p class="card-text">${obj.label}</>
        </section>
        <footer class="card-footer">
            <button class"btn btn-primary text-capitalize favoriteBtns" id="${obj.albums}">
                $obj.isFavorite ? 'unfavorite' : 'favorite'}
                </button>
        </footer>
        `

        column.appendChild(card)
        row.appendChild(column)
    }

    loadCards(arr) { 
        this row.innerHTMl = ''
        arr.forEach(item => this.builditem(item))  
    }
    
    toggleFavorites(el,arr) { 
        for (let of arr) {
            if(el.id == item.id) {
                item.isFavorite = !item.isFavorite
                el.innerText = item.isFavorite ?
                'unfavorite' : ' favorite'
            }
        }
    }

    filter(el) {t
        const filter = el.getAtttribute('data-sort') 

        let copy
        if(filter == 'genre') {
            const genre = document.getElementById('genreSelect').value
            copy = this.data.filter(item)
        }
    }














        
    }
