import dueModel from '../../DB/model/due.model.js';
import internalServerError from '../../utils/internal_server_error.js';

export const addDue = async (req, res) => {
  try {
    const { dueType, dueTitle, courseName, dueTopic, dueDate } = req.body;

    const due = await dueModel.create({
      dueType,
      dueTitle,
      courseName,
      dueTopic,
      dueDate,
      instructor: req.user._id,
    });

    res.status(201).json({ message: 'Done', due }); // 201 Created
  } catch (error) {
    internalServerError(res, error);
  }
};

export const getDueById = async (req, res) => {
  try {
    const due = await dueModel.findById(req.params.id);

    if (!due) {
      return res.status(404).json({ message: 'due not found' }); // 404 Not Found
    }

    res.status(200).json({ message: 'Done', due }); // 200 OK
  } catch (error) {
    internalServerError(res, error);
  }
};

export const getAllDues = async (req, res) => {
  try {
    const dues = await dueModel.find({ isDeleted: false }).populate({
      path: 'instructor',
      select: 'name -_id',
    });

    // if (!dues || dues.length === 0) {
    //   return res.status(200).json({ message: ['There is no dues right now'] }); // 200 OK
    // }

    res.status(200).json({ data: dues }); // 200 OK
  } catch (error) {
    internalServerError(res, error);
  }
};

export const updateDueById = async (req, res) => {
  try {
    const { id } = req.params;
    const { dueType, dueTitle, courseName, dueTopic, dueDate } = req.body;
    const due = await dueModel.findById(id);

    if (!due || due.instructor != req.user.id || due.isDeleted === true) {
      return res.status(404).json({ message: 'due not found' }); // 404 Not Found
    }

    const updated = await dueModel.findByIdAndUpdate(
      id,
      {
        dueType,
        dueTitle,
        courseName,
        dueTopic,
        dueDate,
        $inc: { __v: 1 },
      },
      { new: true },
    );

    res.status(200).json({ message: 'Done updating your due', updated }); // 200 OK
  } catch (error) {
    internalServerError(res, error);
  }
};

export const softDeleteDueById = async (req, res) => {
  try {
    const { id } = req.params;
    const due = await dueModel.findById(id);

    if (!due || due.instructor != req.user.id || due.isDeleted === true) {
      return res.status(404).json({ message: 'due not found' }); // 404 Not Found
    }

    await dueModel.findByIdAndUpdate(
      id,
      {
        deletedBy: req.user._id,
        isDeleted: true,
      },
      { new: true },
    );

    res.status(200).json({ message: 'your due moved to trash' }); // 200 OK
  } catch (error) {
    internalServerError(res, error);
  }
};

export const deleteDueById = async (req, res) => {
  try {
    await dueModel.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: 'due has been deleted' }); // 200 OK
  } catch (error) {
    internalServerError(res, error);
  }
};
