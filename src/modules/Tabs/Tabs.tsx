import {memo, useCallback, useEffect} from 'react';
import cls from './Tabs.module.scss';
import classNames from 'classnames';
import {useDispatch, useSelector} from "react-redux";
import {getContentType, setType, TabType} from "../../store/rootReducer.ts";

const tabsData: TabType[] = [
    TabType.article,
    TabType.form,
]

export const Tabs = memo(() => {
    const dispatch = useDispatch();
    const currentType = useSelector(getContentType);

    const escFunction = useCallback((event: KeyboardEvent) => {
        console.log('sadasds')
        if (event.key === 'Tab') {
            dispatch(setType(currentType === TabType.form ? TabType.article : TabType.form))
        }
    }, [currentType, dispatch]);

    useEffect(() => {
        document.addEventListener("keydown", escFunction);
        console.log('add')

        return () => {
            console.log('remove')
            document.removeEventListener("keydown", escFunction);
        };
    }, [escFunction]);


    const onChangeTab = useCallback((newTab: TabType) => {
        dispatch(setType(newTab));
    }, [dispatch]);

    return (
        <>
            {
                tabsData.map((tab, index) => (
                    <article
                        className={classNames(cls.tab, {
                            [cls.tabActive]: currentType === tab,
                            [cls.last]: index === tabsData.length - 1
                        }, [])}
                        onClick={() => onChangeTab(tab)}
                        tabIndex={index}
                    >
                        <div className={cls.titleContainer}>
                            <h1 className={cls.title}>Загаловок таба {index + 1}</h1>
                            {

                            }
                            <img src={`src/assets/${currentType === tab ? 'arrow-white' : 'arrow-blue'}.svg`}
                                 className={cls.arrow} alt='arrow'/>
                        </div>
                        <p>Равным образом, высококачественный прототип будущего проекта способствует повышению качества
                            анализа существующих паттернов</p>
                        <p>Равным образом, высококачественный прототип будущего проекта способствует повышению качества
                            анализа существующих паттернов</p>
                    </article>
                ))
            }
        </>
    );
});