import { addHours } from 'date-fns';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [formValues, setFormValues] = useState({
    title: 'Test note',
    notes: 'Test notes',
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className='container'>
        <div className='form-group mb-2'>
          <label className='col-12'>Fecha y hora inicio</label>
          <DatePicker
            popperPlacement='top-start'
            wrapperClassName='d-flex'
            selected={formValues.start}
            className='form-control'
            onChange={date => setFormValues({ ...formValues, start: date })}
            dateFormat='Pp'
          ></DatePicker>
        </div>

        <div className='form-group mb-2'>
          <label className='col-12'>Fecha y hora fin</label>
          <DatePicker
            popperPlacement='top-start'
            wrapperClassName='d-flex'
            minDate={formValues.start}
            selected={formValues.end}
            className='form-control'
            onChange={date => setFormValues({ ...formValues, end: date })}
            dateFormat='Pp'
          ></DatePicker>
        </div>

        <hr />
        <div className='form-group mb-2'>
          <label>Titulo y notas</label>
          <input
            type='text'
            className='form-control'
            placeholder='Título del evento'
            name='title'
            autoComplete='off'
            value={formValues.title}
            onChange={handleInputChange}
          />
          <small id='emailHelp' className='form-text text-muted'>
            Una descripción corta
          </small>
        </div>

        <div className='form-group mb-2'>
          <textarea
            type='text'
            className='form-control'
            placeholder='Notas'
            rows='5'
            name='notes'
            value={formValues.notes}
            onChange={handleInputChange}
          ></textarea>
          <small id='emailHelp' className='form-text text-muted'>
            Información adicional
          </small>
        </div>

        <button type='submit' className='btn btn-outline-primary btn-block'>
          <i className='far fa-save'></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
