import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,
  indexes: [
    { name: 'idx_email', fields: ['email'] },
    { name: 'idx_username', fields: ['username'] },
  ],
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  id!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  name!: string;


  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.ENUM('student', 'teacher', 'other', 'admin', 'librarian'),
    allowNull: false,
    defaultValue: 'student',
  })
  role!: 'student' | 'teacher' | 'other' | 'admin' | 'librarian';

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image!: string;
}

export default User;