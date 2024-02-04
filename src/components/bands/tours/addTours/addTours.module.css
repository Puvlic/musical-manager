import React, {useState} from 'react';

interface IAddToursState {
    name: string,
    start_date: string,
    end_date: string,
    price: string,
}

const AddTours: React.FC = () => {

    const [fieldsText, SetFieldsText] = useState<IAddToursState>({
        name: '',
        start_date: '',
        end_date: '',
        price: '',
    })

    const ChangeFieldsText = (key: string, value: string) => {
        SetFieldsText((prevState) => ({
            ...prevState,
            [key]: value
        }))
    }

    const fields = [
        {type: 'text', title: 'Название'},
        {type: 'text', title: 'Цена'},
        {type: 'date', title: 'Дата начала'},
        {type: 'date', title: 'Дата окончания'},
    ]

    return (
        <div>
            {fields.map(field => (
                <div>
                    <div>
                        {field.title}
                    </div>
                    <input type={field.type}/>
                </div>
            ))}
        </div>
    );
};

export default AddTours;