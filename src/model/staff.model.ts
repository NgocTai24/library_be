import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'staff',
  timestamps: true,
  indexes: [{ name: 'idx_username', fields: ['username'] }],
})
export class Staff extends Model {
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
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  })
  username!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.ENUM('admin', 'librarian'),
    defaultValue: 'librarian',
    allowNull: false,
  })
  role!: 'admin' | 'librarian';

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
  })
  email!: string;

}

export default Staff;