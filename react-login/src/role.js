import img3 from './11.png';
import './role.css';
import React, { Component } from 'react';

function Role() {
  const Yes = () => {
    window.location.href = '/PhoneSignUp';
  };

  const No = () => {
    window.location.href = '/onboarding';
  };

  // const openModalButtons = document.querySelectorAll('[data-modal-target]');
  // const closeModalButtons = document.querySelectorAll('[data-close-button]');
  // const overlay = document.getElementById('overlay');

  // overlay.addEventListener('click', () => {
  //   const modals = document.querySelectorAll('.modal.active');
  //   modals.forEach((modal) => {
  //     closeModal(modal);
  //   });
  // });

  // openModalButtons.forEach((button) => {
  //   button.addEventListener('click', () => {
  //     const modal = document.querySelector(button.dataset.modalTarget);
  //     openModal(modal);
  //   });
  // });

  // closeModalButtons.forEach((button) => {
  //   button.addEventListener('click', () => {
  //     const modal = button.closest('.modal');
  //     closeModal(modal);
  //   });
  // });

  // function openModal(modal) {
  //   if (modal == null) return;
  //   modal.classList.add('active');
  //   overlay.classList.add('active');
  // }

  // function closeModal(modal) {
  //   if (modal == null) return;
  //   modal.classList.remove('active');
  //   overlay.classList.remove('active');
  // }

  return (
    <div className="Role">
      <h1>Are you a caregiver? </h1>
      <img src={img3} alt="2" />
      <button className="button1" onClick={Yes}>
        {' '}
        Yes{' '}
      </button>

      <button className="button2" onClick={No}>
        {' '}
        No{' '}
      </button>

      {/* <button data-modal-target="#modal"> No </button> */}

      {/* <div class="modal" id="modal">
        <div class="modal-header">
          <div class="title">
            <h3>Please check out with your caregiver.</h3>
          </div>
        </div>
        <div class="modal-body">
          <button data-close-button className="close-button">
            {' '}
            OK{' '}
          </button>
        </div>
      </div>
      <div class="active" id="overlay">
        {' '}
      </div> */}
    </div>
  );
}

export default Role;
