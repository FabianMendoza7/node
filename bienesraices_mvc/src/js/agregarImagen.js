import { Dropzone } from 'dropzone'

const token = document.querySelector('meta["csrf-token"]').getAttribute('content')

Dropzone.options.imagen = {
    dictDefaultMessage: 'Sube tus imágenes aquí',
    acceptedFiles: '.png,.jpg,.jpeg',
    maxFilesize: 5,
    maxFiles: 1,
    parallelUploads: 1,
    autoProcessQueue: true,
    addRemoveLinks: true,
    dictRemoveFile: "Borrar archivo",
    dictMaxFilesExceeded: "El límite es un archivo",
    headers: {
        'CSRF-Token': token
    }
}