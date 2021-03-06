import annotator from '../icons/annotator.svg';
import sigmodel from '../icons/sigmodel.svg';
import trafaret from '../icons/trafaret.svg';
import oligoDesigner from '../icons/oligo designer.svg';
import siScorer from '../icons/si scorer.svg';
import star from '../icons/star.svg';

const ADD_FILTR = 'ADD_FILTR';
const CHANGE_FAVORITE = 'CHANGE_FAVORITE';

//получаем сохраненные данные из localStorage
let servicesData = [];
const servicesFromStorage = localStorage.getItem("services");
if (servicesFromStorage != null) {
    servicesData = JSON.parse(servicesFromStorage);
}
else
    servicesData = [
        {
            "name": "PTM Report",
            "description": "Предсказывает возможные посттрансляционные модификации в аминокислотных последовательностях вариабельных доменов антител",
            "id": "1",
            "category": "prediction",
            isFavorites: false
        },
        {
            "name": "Prot-Params",
            "description": "Вычисляет свойства пептидов",
            "id": "2",
            "category": "prediction",
            isFavorites: false
        },
        {
            "name": "Nu-Params",
            "description": "Предсказывает вторичные структуры РНК/ДНК и сайты самозалипания ДНК последовательностей",
            "id": "3",
            "category": "prediction",
            isFavorites: false
        },
        {
            "name": "Trafaret",
            "description": "Выводит информацию о возможных позициях транскрипционных факторов (ТФ) во входной последовательности",
            "id": "4",
            "category": "prediction",
            isFavorites: false
        },
        {
            "name": "Tap Tool",
            "description": "Оценивает специфические метрики по структуре антитела и сравнивает их со стандартами",
            "id": "5",
            "category": "prediction",
            isFavorites: false
        },
        {
            "name": "Oligo-Designer",
            "description": "Генерирует олиги по аминокислотным или нуклеотидным последовательностям",
            "id": "6",
            "category": "selection",
            isFavorites: false
        },
        {
            "name": "Mutagenesis Primers",
            "description": "Подбирает мутирующие праймеры для сборки кандидатов",
            "id": "7",
            "category": "selection",
            isFavorites: false
        },
        {
            "name": "Oligos Library",
            "description": "Библиотечный режим олиго-дизайнера, выдаёт результат с минимальным количеством уникальных олигов",
            "id": "8",
            "category": "selection",
            isFavorites: false
        },
        {
            "name": "Flanker",
            "description": "Создаёт праймеры с заданными характеристиками",
            "id": "9",
            "category": "selection",
            isFavorites: false
        },
        {
            "name": "Fasta to CSV",
            "description": "Конвертирует fasta-файл или txt-файл с изменениями в файл csv",
            "id": "10",
            "category": "synthesis",
            isFavorites: false
        },
        {
            "name": "Biosset",
            "description": "Создаёт ворклист для синтезатора, ворклист для DropSense, мэппинг и рассчитывает расход реактивов по CSV с заказами",
            "id": "11",
            "category": "synthesis",
            isFavorites: false
        },
        {
            "name": "Oligo-Normaliser",
            "description": "Создаёт ворклист для текана по файлам с заказами или мэппингу из Biosset",
            "id": "12",
            "category": "synthesis",
            isFavorites: false
        },
        {
            "name": "Tecan Lib",
            "description": "Генерирует ворклисты для текана по сборке конструкций из олигов и добавлению к ним фланкеров",
            "id": "13",
            "category": "synthesis",
            isFavorites: false
        },
        {
            "name": "Seq-Validator",
            "description": "Верифицирует сборку плазмиды по данным секвенирования",
            "id": "14",
            "category": "check",
            isFavorites: false
        },
        {
            "name": "Sanger Helper",
            "description": "Собирает клонов по файлам секвенирования",
            "id": "15",
            "category": "check",
            isFavorites: false
        },
        {
            "name": "In-house Annotator",
            "description": "Аннотирует последовательности по выбранной базе данных и разметке",
            "id": "16",
            "category": "check",
            isFavorites: false
        },
        {
            "name": "WHO-like Annotator",
            "description": "Аннотирует аминокислотные последовательности антител на животных и человека и подсчитывает vgene-score как у регуляторных органов",
            "id": "17",
            "category": "check",
            isFavorites: false
        },
        {
            "name": "SigModel",
            "description": "Помогает анализировать результаты тестов и строить визуализации для них",
            "id": "18",
            "category": "check",
            isFavorites: false
        },
        {
            "name": "VH vs VHH",
            "description": "Определяет типы тяжёлых цепей антител",
            "id": "19",
            "category": "check",
            isFavorites: false
        },
        {
            "name": "Student",
            "description": "Проводит статистический анализ числовых данных и строит визуализацию для них",
            "id": "20",
            "category": "check",
            isFavorites: false
        },
        {
            "name": "BLAST",
            "description": "Поиск последовательностей по открытым базам данных",
            "id": "21",
            "category": "check",
            isFavorites: false
        },
        {
            "name": "Plasmid Passport",
            "description": "Генерирует паспорт плазмид и заполняет стандартные поля",
            "id": "22",
            "category": "documents",
            isFavorites: false
        },
        {
            "name": "Plasmid Mapper",
            "description": "Генерирует карты плазмид с переданными последовательностями",
            "id": "23",
            "category": "documents",
            isFavorites: false
        },
        {
            "name": "Protein Passport",
            "description": "Создаёт паспорт белка по файлу с последовательностями или картам плазмид и схеме трансфекции",
            "id": "24",
            "category": "documents",
            isFavorites: false
        },
        {
            "name": "Act Creator",
            "description": "Составляет для файлов CSV акт приёма-передачи олигов из этих файлов",
            "id": "25",
            "category": "documents",
            isFavorites: false
        },
        {
            "name": "Fasta Formatter",
            "description": "Записывает последовательности из fasta-файла в соответствии с выбранным форматом",
            "id": "26",
            "category": "documents",
            isFavorites: false
        }
    ]

let initialState =
{
    filtrs: [
        {
            id: 0,
            name: 'favorites',
            caption: 'Избранное',
            isActive: false,
            icon: star
        },
        {
            id: 1,
            name: 'prediction',
            caption: 'Прогноз',
            isActive: false,
            icon: annotator
        },
        {
            id: 2,
            name: 'selection',
            caption: 'Подбор',
            isActive: false,
            icon: sigmodel
        },
        {
            id: 3,
            name: 'synthesis',
            caption: 'Синтез',
            isActive: false,
            icon: trafaret
        },
        {
            id: 4,
            name: 'check',
            caption: 'Проверка',
            isActive: false,
            icon: oligoDesigner
        },
        {
            id: 5,
            name: 'documents',
            caption: 'Документы',
            isActive: false,
            icon: siScorer
        }
    ],
    services: servicesData
}

const filtrReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILTR: {
            let stateCopy = { ...state };
            stateCopy.filtrs = [...state.filtrs];
            let filtr = stateCopy.filtrs.find(item => item.id == action.idFiltr);
            filtr.isActive = !filtr.isActive;
            return stateCopy;
        }
        case CHANGE_FAVORITE: {
            let stateCopy = { ...state };
            stateCopy.services = [...state.services];
            let service = stateCopy.services.find(item => item.id == action.idService);
            service.isFavorites = !service.isFavorites;
            localStorage.setItem("services", JSON.stringify(stateCopy.services));
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addFiltrActionCreator = (value) => ({ type: ADD_FILTR, idFiltr: value })
export const changeFavoriteActionCreator = (value) => ({ type: CHANGE_FAVORITE, idService: value })

export default filtrReducer;