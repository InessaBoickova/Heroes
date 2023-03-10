import {useHttp} from '../../hooks/http.hook';
import { v4 as uuidv4 } from 'uuid';
import {useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {heroCreated } from '../../actions';

const HeroesAddForm = () => {
    const {filters, filtersLoadingStatus} = useSelector(state => state);
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [element,setElement] = useState('')

    const dispatch = useDispatch();
    const {request} = useHttp();

    const onSubmit = (e) =>{
        e.preventDefault();
        let newHero ={
            id : uuidv4(),
            name,
            description,
            element,
        }
        request(`http://localhost:3001/heroes`, 'POST',  JSON.stringify(newHero))
            .then((data) => data)
            .then(dispatch(heroCreated(newHero)))
            .catch((error) => console.log(error));
        setName('');
        setDescription('');
    }
    
    const renderFilters = (filters, status) => {
        if (status === "error") {
            return <option>Ошибка загрузки</option>
        }
        
        if (filters && filters.length > 0 ) {
            return filters.map(({name}) => {
                if (name !== 'Все') {
                    return <option key={name} value={name}>{name}</option>
                }
            }) 
        }
    }

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={(e)=> onSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    onChange={(e)=> setName(e.target.value)}
                    required
                    value={name}
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                   onChange={(e)=> setDescription(e.target.value)}
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    value={description}
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    onChange={(e)=> setElement(e.target.value)}
                    required
                    className="form-select" 
                    id="element" 
                    name="element">
                    {renderFilters(filters, filtersLoadingStatus)}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;