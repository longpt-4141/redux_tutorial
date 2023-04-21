import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../app/actions';
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';
import { todoRemainingSelector } from '../../app/selectors/todoRemainingSelector';
import todoSlice  from './todoSlice';
export default function TodoList() {
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState('Medium');

    const todoList = useSelector(todoRemainingSelector)

    const dispatch = useDispatch();

    const handleAddButtonClick = () => {
        dispatch(
            todoSlice.actions.addTodo({
                id : uuidv4(),
                name: todoName,
                priority: priority,
                completed : false,
            })
        )

        setTodoName('');
        setPriority('Medium');
    }

    const handleChangeTodoName = (e) => {
        setTodoName(e.target.value)
    }

    const handleSelectPriority = (value) => {
        setPriority(value)
    }

    return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
        <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
            todoList.map((todoItem, i) => 
                <Todo id={todoItem.id} name={todoItem.name} priority={todoItem.priority} key={todoItem.id} completed={todoItem.completed}/>
            )
        }
        </Col>
        <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
            <Input onChange={handleChangeTodoName}/>
            <Select defaultValue="Medium" onSelect={handleSelectPriority}>
            <Select.Option value='High' label='High'>
                <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
                <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
                <Tag color='gray'>Low</Tag>
            </Select.Option>
            </Select>
            <Button type='primary' onClick={handleAddButtonClick}>
                Add
            </Button>
        </Input.Group>
        </Col>
    </Row>
    );
}