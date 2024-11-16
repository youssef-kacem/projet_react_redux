import { EDIT_SERVICE, EDIT_PROFIL, GET_OFFERERS, SEARCH, ADD_SERVICES, REMOVE_SERVICES, ADD_DEMANDES, REMOVE_DEMANDES, ADD_ZONE, REMOVE_ZONE, ADD_DISPONIBILITES, REMOVE_DISPONIBILITES, } from "../actions/actionstype";
import uuid from 'uuid';

let membres  = [
    {
        picture: "https://scontent.ftun9-1.fna.fbcdn.net/v/t31.0-8/s960x960/29354474_1728126013912207_4962820488360707179_o.jpg?_nc_cat=110&_nc_ohc=GZ4I8ahCl9oAQnzTzeElTRk2rrcTP2mm7f5f88X2oVfjIOWH40bH0j-1Q&_nc_ht=scontent.ftun9-1.fna&_nc_tp=1&oh=84fd0fefb333b61f14e2f98fe7fe0b77&oe=5E9DCDAE",
        title: "Hamdi Doss",
        age: "24",
        rating: 2,
        id: uuid(),
        description: "",
        city: "Monastir",
    },
    {
        picture: "https://scontent.ftun9-1.fna.fbcdn.net/v/t1.0-9/s960x960/75299784_2662633550458979_1730035993882394624_o.jpg?_nc_cat=107&_nc_ohc=yUKQlKHXl3gAQlp0m0e-SXLFTvGCEXBjOIhDsgyVOAtU_geiD6UvAvkpg&_nc_ht=scontent.ftun9-1.fna&_nc_tp=1&oh=aec1d47843c901f10499991480eaa71a&oe=5E950430",
        title: "Moez El Kouni",
        age: "25",
        rating: 4,
        id: uuid(),
        description: "",
        city: "Sousse",
    },
    {
        picture: "https://scontent.ftun9-1.fna.fbcdn.net/v/t1.0-9/p960x960/67558657_2266969853552514_1266076442404323328_o.jpg?_nc_cat=110&_nc_ohc=YOoiMdo_zk8AQlMNlYx7lNVX9KFoFuEFbzP3qAhVnUyjpP1phB8EGxd-w&_nc_ht=scontent.ftun9-1.fna&_nc_tp=1&oh=6c7f8f9064a5a580b5e6b413d951ed49&oe=5EACB552",
        title: "Marwa Ali Bouchiba",
        age: "26",
        rating: 5,
        id: uuid(),
        description: "",
        city: "Tunis",
    },
    {
        picture: "https://scontent.ftun9-1.fna.fbcdn.net/v/t31.0-8/s960x960/16835935_10207175715345123_7228692521236328790_o.jpg?_nc_cat=103&_nc_ohc=LpjH2Sz9CmUAQkC1vT4v8Dt1vD6V800WZ-6E0xC-LtgtqCmI4AVyTLAPA&_nc_ht=scontent.ftun9-1.fna&_nc_tp=1&oh=469d16a53b975fab3dca37d21ebb1a62&oe=5EDA81BB",
        title: "Hadhemi Mehdi",
        age: "28",
        rating: 3,
        id: uuid(),
        description: "",
        city: "Mahdia",
    },
    {
        picture: "https://scontent.ftun9-1.fna.fbcdn.net/v/t1.0-9/p960x960/48429254_2279086082143307_960346608552116224_o.jpg?_nc_cat=111&_nc_ohc=9Ovuif4aHNIAQmH1vf6WjXJ_OY6pcNj4jF_4D6VKLotzhBf7BVQlQfQbw&_nc_ht=scontent.ftun9-1.fna&_nc_tp=1&oh=a2c36389777d82967ad78c7f4216d83a&oe=5E95512B",
        title: "Youssef Kacem",
        age: "20",
        rating: 5,
        id: uuid(),
        description: "",
        city: "Mahdia",
    },
    {
        picture: "https://media-exp1.licdn.com/dms/image/C5603AQHHFyNWdjd50A/profile-displayphoto-shrink_800_800/0?e=1584576000&v=beta&t=zfOnujRkSnV6SyfWw9XSAdm1aD13afOvZmvFgy9s8N0",
        title: "Mohamed Foued Slama",
        age: "24",
        rating: 4,
        id: uuid(),
        description: "",
        city: "Sousse",
    },
    {
        picture: "https://scontent.ftun9-1.fna.fbcdn.net/v/t1.0-9/57204037_863989937288292_7629126519276699648_n.jpg?_nc_cat=109&_nc_ohc=A0imGbWB-04AQlIL-nwl4NxNFnd7g8MiZStE5vCaMXw9fl702DYahbbkg&_nc_ht=scontent.ftun9-1.fna&oh=73a5b7c3d3fce14f21ffcf2e06372fde&oe=5E9C39D0",
        title: "Mohaamed Brs",
        age: "39",
        rating: 4,
        id: uuid(),
        description: "",
        city: "Sousse",
    },
    {
        picture: "https://scontent.ftun9-1.fna.fbcdn.net/v/t1.0-0/p180x540/75464284_2481952001895957_4558010905891176448_o.jpg?_nc_cat=101&_nc_ohc=_khhEGYDYIUAQn-X7CGeTH19Mc4uv6BKjRobAbtWiQDQo5sFt8YOMTeRg&_nc_ht=scontent.ftun9-1.fna&_nc_tp=1&oh=987686075e2a39dc0d2bf8d5bcf8b30f&oe=5EA0E91C",
        title: "Sara Maklouf",
        age: "28",
        rating: 4,
        id: uuid(),
        description: "",
        city: "Sousse",
    },
]

const Reducer = (state = { services: [], demandes: [], zones: [], dispo: [], membres  }, action) => {
    switch (action.type) {
        case GET_OFFERERS:
            return {
                ...state,
                membres: action.payload
            }
        // case EDIT_SERVICE:
        //     return {
        //         ...state,
        //         services: [...state.services, action.payload.AllServices]
        //     }
        // @ SERVICE
        case ADD_SERVICES:
            return { ...state, services: state.services.concat(action.payload) }

        case REMOVE_SERVICES:
            return { ...state, services: state.services.filter(el => el.id !== action.payload) }

        // @ DEMANDES
        case ADD_DEMANDES:
            return { ...state, demandes: state.demandes.concat(action.payload) }

        case REMOVE_DEMANDES:
            return { ...state, demandes: state.demandes.filter(el => el.id !== action.payload) }

        // @ ZONE
        case ADD_ZONE:
            return { ...state, zones: state.zones.concat(action.payload) }

        case REMOVE_ZONE:
            return { ...state, zones: state.zones.filter(el => el.id !== action.payload) }

        // @ DISPONIBILITES
        case ADD_DISPONIBILITES:
            return { ...state, dispo: state.dispo.concat(action.payload) }

        case REMOVE_DISPONIBILITES:
            return { ...state, dispo: state.dispo.filter(el => el.id !== action.payload) }
        // Edit Profil
        case EDIT_PROFIL:
            return {
                ...state,
                membres: state.membres.map(el => el._id === action.payload._id ? action.payload : el)
            }
        //  @ serch 
        case SEARCH:
            return (
                membres.filter(el => el.title.toUpperCase().includes(action.payload.name.toUpperCase().trim()) && el.rating >= action.payload.rating)
            )

        //   @ default
        default:
            return state;
    }
};

export default Reducer;
