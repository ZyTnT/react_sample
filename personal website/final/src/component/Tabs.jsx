import React, { useEffect, useState } from "react";
import styles from '../CSS/tabs.module.css'


export default function Tabs( props ){
    let [items, setItems ] = useState(props.items)

    function show( event, index){
        let tabs = items;

        tabs.map( (item, index_item) => {
            item['is_active'] = false;
            if (index == index_item){
                item['is_active'] = true;
            }
            return item;
        })

        setItems( [...tabs] );
    }



    return (
        <div className={ styles['tabs']}>
            <ul className={styles["tab-list"]}>
                {
                    items.map( (item, index) => {
                        return(
                            <li className={ ` ${styles['tab-item']} ${ ( item['is_active']) ? styles['active'] : ''}`} onClick={ (event) => show(event, index) } key={index}>
                            <a className="tab_label">{ item.name }</a>
                        </li>
                        )
                    })
                }
            </ul>

        
            <div className={styles['tab-container']}>
                {
                    items.map( (item, index) => {
                        return(
                            <div className={ ` ${styles['tab-content']} ${ ( item['is_active']) ? styles['active'] : ''}`} key={index}>
                                { item.content }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}