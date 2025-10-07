import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'members',
  timestamps: true,
  indexes: [{ name: 'idx_email', fields: ['email'] }],
})
export class Member extends Model {
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
    type: DataType.TEXT,
    allowNull: true,
  })
  address!: string;

  @Column({
    type: DataType.STRING(15),
    allowNull: true,
  })
  phone!: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.ENUM('student', 'teacher', 'other'),
    defaultValue: 'student',
    allowNull: false,
  })
  member_type!: 'student' | 'teacher' | 'other';

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  registration_date!: Date;

  @Column({
    type: DataType.ENUM('active', 'blocked'),
    defaultValue: 'active',
    allowNull: false,
  })
  status!: 'active' | 'blocked';
}

export default Member;