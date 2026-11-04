import pool from '../config/db.js'
import argon2 from 'argon2';
import { ConflictError, NotFoundError } from '../utils/error.js';

class StaffService {
    async getAllStaff() {
        let data = await pool.query("select id, fullname, phone, photo, role, status, createdat from staff");

        return {
            status: 200,
            data: data.rows
        }
    }

    async createStaff(req, res, next) {
        const { fullname, phone, password, role } = req.body;

        
        let exist = await pool.query('select * from staff where phone=$1', [phone]);
        
        if (exist.rows.length) {
            return next(new ConflictError(409, "User already exists with this phone number!"));
        }

        const hashshedPassword = await argon2.hash(password);

        await pool.query('insert into staff (fullname, phone, password, role) values ($1, $2, $3, $4)', [fullname, phone, hashshedPassword, role]);
    
        return {
            status: 200,
            message: "Staff created successfully"
        }
    }

    async deleteStaff(req, res, next) {
        const { userId } = req.params;

        let existUser = await pool.query('select * from staff where id=$1', [userId]);

        if (!existUser.rows.length) {
            return next(new NotFoundError(404, "User not found!"));
        }

        await pool.query("update staff set status='inactive' where id=$1", [userId]);

        return {
            status: 200,
            message: "User deleted successfully"
        }
    }
}

const staffService = new StaffService();

export default staffService;