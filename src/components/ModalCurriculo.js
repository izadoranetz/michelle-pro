import React, { useState } from "react";

export default function ModalCurriculo({ nomeProfissional, id,  children}) {
  return (
    <>
      <span
        type="span"
        data-bs-toggle="modal"
        data-bs-target={`#${id}`}
        style={{ cursor: "pointer" }}
      >
        Currículo
      </span>

      <div
        class="modal fade"
        id={id}
        tabindex="-1"
        aria-labelledby={id}
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id={id}>
                Currículo - {nomeProfissional}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">{children}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
