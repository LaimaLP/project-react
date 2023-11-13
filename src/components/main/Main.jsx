import { Aside } from '../aside/Aside';
import { Kanban } from '../kanban/Kanban';
import './Main.css';

export function Main() {
    return (
        <main className="main-content">
            <Kanban />
            <Aside />
        </main>
    );
}