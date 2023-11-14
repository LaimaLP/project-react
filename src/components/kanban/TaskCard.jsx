import style from './Kanban.module.css';
import { Tag } from './Tag';

export function TaskCard({ data }) {
    const { title, description, deadline, tags } = data;
    // const title = data.title ...
    const tagsList = tags.map(tag => <Tag title={tag} />);
    // const tagsList = tags.map(tag => <div className={style.tag} style={{ color: '#333' }}>{tag}</div>);


    return (
        <li id="task_1" className={style.taskCard}>
            <div className={style.taskActions}>
                <button className={style.btn + ' fa fa-trash'}>Delete</button>
            </div>
            <div className={style.taskTitle}>{title}</div>
            <div className={style.taskDesc}>{description}</div>
            <div className={style.taskTags}>{tagsList}</div>
            <div className={style.taskDeadline}>{deadline}</div>
        </li>
    );
}

// const tags = ["low", "high", "medium"];
// const tagList = [];

// for (const tag of tags) {
//     tagList.push(<Tag title={tag} />);
// }