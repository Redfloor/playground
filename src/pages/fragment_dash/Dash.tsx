import { useQuery, gql } from '@apollo/client';
import styles from './dash.module.css'
import {RandomHtml} from "./components/RandomHtml";

export const Dash = () => {

    return <RandomHtml randomBs={null}/>
    // const { loading, error, data } = useQuery(dash_books);
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error : {error.message}</p>;

    // return (
    //     <div className={styles.container}>
    //         <div>Boom</div>
    //         {data && "there is data"}
    //     </div>
    // )
}

const dash_books = gql`
    query dash_books {
        books {
            title
        }
    }
`;
