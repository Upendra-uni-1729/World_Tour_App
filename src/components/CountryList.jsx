import styles from './CountryList.module.css';
import Spinner from './Spinner';
import CountryItem from './CountryItem';
import Message from './Message';

function CountryList({cities, isLoading}){
    if (isLoading) return <Spinner />

    if(!cities) return <Message  message={"Add your cities by clicking on the map"}/>


    const countries = cities.reduce((arr, cur) => {
        if(!arr.find(el => el.country === cur.country)) {
            return [...arr, {id:cur.id, country: cur.country, emoji : cur.emoji}]
        }
        return arr;
    }, []);
    return <ul className={styles.countryList}>
        {countries.map(country  => <CountryItem country={country} key={country.id} />)}
    </ul>
}

export default CountryList;