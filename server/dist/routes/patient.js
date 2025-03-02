"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Patient_1 = __importDefault(require("../models/Patient"));
const router = express_1.default.Router();
// Create a new patient
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patient = new Patient_1.default(req.body);
        yield patient.save();
        res.status(201).json(patient);
    }
    catch (error) {
        res.status(400).json({ message: error instanceof Error ? error.message : 'An error occurred while creating the patient' });
    }
}));
// Get all patients
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patients = yield Patient_1.default.find();
        res.json(patients);
    }
    catch (error) {
        res.status(500).json({ message: error instanceof Error ? error.message : 'An error occurred while fetching patients' });
    }
}));
// Get a single patient
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patient = yield Patient_1.default.findById(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json(patient);
    }
    catch (error) {
        res.status(500).json({ message: error instanceof Error ? error.message : 'An error occurred while fetching the patient' });
    }
}));
exports.default = router;
