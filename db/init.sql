CREATE DATABASE dt;
GRANT ALL PRIVILEGES ON DATABASE dt TO dt;
\c dt;


-- Table: clinics
CREATE TABLE clinics (
    clinic_id SERIAL PRIMARY KEY,
    clinic_name VARCHAR(255) NOT NULL,
    address TEXT,
    city VARCHAR(100),
    country VARCHAR(100),
    phone_number VARCHAR(20),
    email VARCHAR(100),
    description TEXT,
    image_url VARCHAR(255),
    latitude DECIMAL(10, 6),
    longitude DECIMAL(10, 6)
);

-- Table: services
CREATE TABLE services (
    service_id SERIAL PRIMARY KEY,
    service_name VARCHAR(255) NOT NULL,
    description TEXT
);

-- Table: clinic_services
CREATE TABLE clinic_services (
    clinic_service_id SERIAL PRIMARY KEY,
    clinic_id INTEGER REFERENCES clinics(clinic_id),
    service_id INTEGER REFERENCES services(service_id),
    price DECIMAL(10, 2),
    currency VARCHAR(10)
);

-- Table: doctors
CREATE TABLE doctors (
    doctor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    specialization VARCHAR(255),
    biography TEXT,
    image_url VARCHAR(255)
);

-- Table: clinic_doctors
CREATE TABLE clinic_doctors (
    clinic_doctor_id SERIAL PRIMARY KEY,
    clinic_id INTEGER REFERENCES clinics(clinic_id),
    doctor_id INTEGER REFERENCES doctors(doctor_id)
);

-- Table: patients
CREATE TABLE patients (
    patient_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone_number VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: appointments
CREATE TABLE appointments (
    appointment_id SERIAL PRIMARY KEY,
    patient_id INTEGER REFERENCES patients(patient_id),
    clinic_id INTEGER REFERENCES clinics(clinic_id),
    service_id INTEGER REFERENCES services(service_id),
    appointment_date DATE NOT NULL,
    appointment_time TIME WITHOUT TIME ZONE,
    notes TEXT,
    status VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: testimonials
CREATE TABLE testimonials (
    testimonial_id SERIAL PRIMARY KEY,
    patient_name VARCHAR(255),
    clinic_id INTEGER REFERENCES clinics(clinic_id),
    rating INTEGER,
    testimonial_comment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    is_approved BOOLEAN DEFAULT FALSE
);

-- Table: users
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone_number VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);