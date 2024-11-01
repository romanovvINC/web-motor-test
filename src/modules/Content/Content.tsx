import classNames from 'classnames'
import {memo} from 'react';
import cls from './Content.module.scss';
import {useSelector} from "react-redux";
import {getContentType, TabType} from "../../store/rootReducer.ts";

interface ContentProps {
  className?: string
}

export const Content = memo((props: ContentProps) => {
    const { className } = props;
    const contentType = useSelector(getContentType);

    return (
        <div className={cls.contentContainer}>
        <div className={classNames(cls.contentBox, {}, [className])}>
            {
                contentType === TabType.article ? (
                    <>
                        <div className={cls.scrollContainer}>
                            <h1>
                                Контент таба 1
                            </h1>
                            <p>
                                Безусловно, начало повседневной работы по формированию позиции способствует подготовке и
                                реализации модели развития.
                            </p>
                            <ul>
                                <li>
                                    Элемент ненумерованного списка
                                </li>
                                <li>
                                    Элемент ненумерованного списка
                                </li>
                            </ul>
                            <p>
                                Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское
                                обеспечение нашей деятельности выявляет срочную потребность приоретизации разума над
                                эмоциями.
                            </p>
                            <ol>
                                <li>
                                    Элемент нумерованного списка
                                </li>
                                <li>
                                    Элемент нумерованного списка
                                </li>
                            </ol>
                            <p>
                                Каждый из нас понимает очевидную вещь: выбранный нами
                            </p>
                            <p>
                                Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское
                                обеспечение нашей деятельности выявляет срочную потребность приоретизации разума над
                                эмоциями.
                            </p>
                            <ul>
                                <li>
                                    Элемент ненумерованного списка
                                </li>
                                <li>
                                    Элемент ненумерованного списка
                                </li>
                            </ul>
                        </div>
                        <button className={cls.actionButton}>Кнопка действия</button>
                    </>
                ) : (
                    <>
                        <div className={cls.scrollContainer}>
                            <h1>
                                Контент таба 2
                            </h1>
                            <input className={cls.input} placeholder={'Имя'}/>
                            <input className={cls.input} placeholder={'Фамилия'}/>
                            <input className={cls.input} placeholder={'Логин'}/>
                        </div>
                        <button className={cls.actionButton}>Кнопка действия</button>
                    </>
                )
            }
        </div>
        </div>
    );
});