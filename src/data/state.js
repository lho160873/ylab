import FiltrPanel from "../components/FiltrPanel/FiltrPanel";
import {rerenderEntireTree} from "../render";
import annotator from '../icons/annotator.svg';
import sigmodel from '../icons/sigmodel.svg';
import trafaret from '../icons/trafaret.svg';
import oligoDesigner from '../icons/oligo designer.svg';
import siScorer from '../icons/si scorer.svg';

let state = {
    filtrs: [
        {
          id: 0,
          name:'prediction',
          caption: 'Прогноз',
          isActive: false,
          icon:annotator
        },
        {
          id: 1,
          name:'selection',
          caption: 'Подбор',
          isActive: false,
          icon:sigmodel
        },
        {
          id: 2,
          name: 'synthesis',
          caption: 'Синтез',
          isActive: false,
          icon:trafaret
        },
        {
          id: 3,
          name: 'check',
          caption: 'Проверка',
          isActive: false,
          icon:oligoDesigner
        },
        {
          id: 4,
          name:'documents',
          caption: 'Документы',
          isActive: false,
          icon:siScorer
        }
      ],
      services: [
        {
          "name": "PTM Report",
          "description": "Предсказывает возможные посттрансляционные модификации в аминокислотных последовательностях вариабельных доменов антител",
          "id": "1",
          "category": "prediction"
        },
        {
          "name": "Prot-Params",
          "description": "Вычисляет свойства пептидов",
          "id": "2",
          "category": "prediction"
        },
        {
          "name": "Nu-Params",
          "description": "Предсказывает вторичные структуры РНК/ДНК и сайты самозалипания ДНК последовательностей",
          "id": "3",
          "category": "prediction"
        },
        {
          "name": "Trafaret",
          "description": "Выводит информацию о возможных позициях транскрипционных факторов (ТФ) во входной последовательности",
          "id": "4",
          "category": "prediction"
        },
        {
          "name": "Tap Tool",
          "description": "Оценивает специфические метрики по структуре антитела и сравнивает их со стандартами",
          "id": "5",
          "category": "prediction"
        },
        {
          "name": "Oligo-Designer",
          "description": "Генерирует олиги по аминокислотным или нуклеотидным последовательностям",
          "id": "6",
          "category": "selection"
        },
        {
          "name": "Mutagenesis Primers",
          "description": "Подбирает мутирующие праймеры для сборки кандидатов",
          "id": "7",
          "category": "selection"
        },
        {
          "name": "Oligos Library",
          "description": "Библиотечный режим олиго-дизайнера, выдаёт результат с минимальным количеством уникальных олигов",
          "id": "8",
          "category": "selection"
        },
        {
          "name": "Flanker",
          "description": "Создаёт праймеры с заданными характеристиками",
          "id": "9",
          "category": "selection"
        },
        {
          "name": "Fasta to CSV",
          "description": "Конвертирует fasta-файл или txt-файл с изменениями в файл csv",
          "id": "10",
          "category": "synthesis"
        },
        {
          "name": "Biosset",
          "description": "Создаёт ворклист для синтезатора, ворклист для DropSense, мэппинг и рассчитывает расход реактивов по CSV с заказами",
          "id": "11",
          "category": "synthesis"
        },
        {
          "name": "Oligo-Normaliser",
          "description": "Создаёт ворклист для текана по файлам с заказами или мэппингу из Biosset",
          "id": "12",
          "category": "synthesis"
        },
        {
          "name": "Tecan Lib",
          "description": "Генерирует ворклисты для текана по сборке конструкций из олигов и добавлению к ним фланкеров",
          "id": "13",
          "category": "synthesis"
        },
        {
          "name": "Seq-Validator",
          "description": "Верифицирует сборку плазмиды по данным секвенирования",
          "id": "14",
          "category": "check"
        },
        {
          "name": "Sanger Helper",
          "description": "Собирает клонов по файлам секвенирования",
          "id": "15",
          "category": "check"
        },
        {
          "name": "In-house Annotator",
          "description": "Аннотирует последовательности по выбранной базе данных и разметке",
          "id": "16",
          "category": "check"
        },
        {
          "name": "WHO-like Annotator",
          "description": "Аннотирует аминокислотные последовательности антител на животных и человека и подсчитывает vgene-score как у регуляторных органов",
          "id": "17",
          "category": "check"
        },
        {
          "name": "SigModel",
          "description": "Помогает анализировать результаты тестов и строить визуализации для них",
          "id": "18",
          "category": "check"
        },
        {
          "name": "VH vs VHH",
          "description": "Определяет типы тяжёлых цепей антител",
          "id": "19",
          "category": "check"
        },
        {
          "name": "Student",
          "description": "Проводит статистический анализ числовых данных и строит визуализацию для них",
          "id": "20",
          "category": "check"
        },
        {
          "name": "BLAST",
          "description": "Поиск последовательностей по открытым базам данных",
          "id": "21",
          "category": "check"
        },
        {
          "name": "Plasmid Passport",
          "description": "Генерирует паспорт плазмид и заполняет стандартные поля",
          "id": "22",
          "category": "documents"
        },
        {
          "name": "Plasmid Mapper",
          "description": "Генерирует карты плазмид с переданными последовательностями",
          "id": "23",
          "category": "documents"
        },
        {
          "name": "Protein Passport",
          "description": "Создаёт паспорт белка по файлу с последовательностями или картам плазмид и схеме трансфекции",
          "id": "24",
          "category": "documents"
        },
        {
          "name": "Act Creator",
          "description": "Составляет для файлов CSV акт приёма-передачи олигов из этих файлов",
          "id": "25",
          "category": "documents"
        },
        {
          "name": "Fasta Formatter",
          "description": "Записывает последовательности из fasta-файла в соответствии с выбранным форматом",
          "id": "26",
          "category": "documents"
        }
      ],
      currentServiceId:0
}

export let addFiltr = (idFiltr) => {
   console.log("addFiltr") 
  /* let newFiltr = {
        id: idNew,
        name: "sdfsdf",
        caption: "sdfasfsdf"
    };
    state.filtrs.push(newFiltr);
    rerenderEntireTree(state);*/
    
    let filtr = state.filtrs.find(item => item.id == idFiltr);
    console.log(filtr);
    console.log( filtr.isActive );
    
    filtr.isActive = !filtr.isActive
    console.log(filtr.isActive );
    
    
    console.log(idFiltr)
    rerenderEntireTree(state);
}

export let setIdService = (idService) => {
  /* let newFiltr = {
       id: idNew,
       name: "sdfsdf",
       caption: "sdfasfsdf"
   };
   state.filtrs.push(newFiltr);
   rerenderEntireTree(state);*/
   console.log("setIdService")
   console.log(idService)
   state.currentServiceId = idService;
}

export let getIdService = (idService) => {
  /* let newFiltr = {
       id: idNew,
       name: "sdfsdf",
       caption: "sdfasfsdf"
   };
   state.filtrs.push(newFiltr);
   rerenderEntireTree(state);*/
   console.log("getIdService")
   console.log(state.currentServiceId)
   return state.currentServiceId;
}


export default state;