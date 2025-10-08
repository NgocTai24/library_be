import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import User from './user.model';
import Book from './book.model';

@Table({
  tableName: 'borrow',
  timestamps: true,
  indexes: [
    { name: 'idx_user_id', fields: ['userId'] },
    { name: 'idx_book_id', fields: ['bookId'] },
  ],
})
export class Borrow extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  id!: string;

  // Người mượn (user)
  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  userId!: string;

  @BelongsTo(() => User)
  user!: User;

  // Sách mượn
  @ForeignKey(() => Book)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  bookId!: string;

  @BelongsTo(() => Book)
  book!: Book;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  borrowDate!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  dueDate!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  returnDate!: Date;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00,
  })
  fine!: number;

  @Column({
    type: DataType.ENUM('borrowed', 'returned', 'overdue'),
    allowNull: false,
    defaultValue: 'borrowed',
  })
  status!: 'borrowed' | 'returned' | 'overdue';

  // Nhân viên xử lý (user)
  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  staffId!: string;

  @BelongsTo(() => User, 'staffId')
  staff!: User;
}

export default Borrow;