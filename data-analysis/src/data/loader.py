import pandas as pd
from .database import get_connection


def load_grades():
    query = """
        SELECT
            s.id_student,
            s.first_name,
            s.last_name,
            sub.id_subject,
            sub.name AS subject,
            sem.id_semester,
            sem.name AS semester,
            g.value AS grade
        FROM grade g
        INNER JOIN student s
            ON s.id_student = g.id_student
        INNER JOIN subject sub
            ON sub.id_subject = g.id_subject
        INNER JOIN semester sem
            ON sem.id_semester = g.id_semester;
    """

    connection = get_connection()

    try:
        df = pd.read_sql_query(query, connection)
        return df

    finally:
        connection.close()