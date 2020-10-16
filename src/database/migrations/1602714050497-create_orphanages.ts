import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1602714050497 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        var table = new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'instructions',
                    type: 'text'
                },
                {
                    name: 'about',
                    type: 'text'
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'opening_hours',
                    type: 'varchar'
                }
            ],
        });
        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanages');
    }

}
