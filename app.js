document.addEventListener("DOMContentLoaded", () => {
  const API_BASE_URL = "http://localhost:3000";

  const getDoctorList = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/doctor`);
      const doctors = await response.json();
      displayDoctors(doctors);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const searchDoctors = async (query) => {
    try {
      const response = await fetch(`${API_BASE_URL}/doctor/search/${query}`);
      const doctors = await response.json();
      displayDoctors(doctors);
    } catch (error) {
      console.error("Error searching doctors:", error);
    }
  };

  const displayDoctors = (doctors) => {
    const doctorList = document.getElementById("doctorList");
    doctorList.innerHTML = "";
    doctors.forEach((doctor) => {
      const doctorItem = document.createElement("div");
      doctorItem.className = "doctor-item";
      doctorItem.textContent = `Dr. ${doctor.name} - ${doctor.speciality}`;
      doctorList.appendChild(doctorItem);
    });
  };

  document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchQuery").value;
    if (query) {
      searchDoctors(query);
    } else {
      getDoctorList();
    }
  });

  getDoctorList();
});
