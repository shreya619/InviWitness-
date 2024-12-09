// script.js

function uploadEvidence() {
    const evidenceInput = document.getElementById('evidence');
    if (evidenceInput.files.length > 0) {
        document.getElementById('uploadStatus').innerText = "Evidence uploaded successfully!";
    } else {
        document.getElementById('uploadStatus').innerText = "Please select a file to upload.";
    }
}

function submitComplaint() {
    const complaintForm = document.getElementById('complaintForm');
    if (complaintForm.querySelector('textarea').value.trim() !== "") {
        document.getElementById('complaintStatus').innerText = "Complaint submitted successfully!";
    } else {
        document.getElementById('complaintStatus').innerText = "Please provide details of the complaint.";
    }
}

function reportActivity() {
    const watchForm = document.getElementById('watchForm');
    if (watchForm.querySelector('textarea').value.trim() !== "") {
        document.getElementById('watchStatus').innerText = "Activity reported successfully!";
    } else {
        document.getElementById('watchStatus').innerText = "Please describe the suspicious activity.";
    }
}
